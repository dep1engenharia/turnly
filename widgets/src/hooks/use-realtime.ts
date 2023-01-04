import { useCallback, useLayoutEffect } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { Session } from '../@types/session'
import { Nullable } from '../@types/shared'
import { getRealtime, RealtimeClient } from '../libs/realtime'
import { useBus } from '../services/event-bus'
import { useSession } from './use-session'
import { useVisibility } from './use-visibility'

export enum RealtimeEvents {
  /**
   * Service events
   */
  SERVICE_TICKETS_AHEAD = 'queuing.service.tickets.ahead',
  SERVICE_TICKETS_BEHIND = 'queuing.service.tickets.behind',

  /**
   * Ticket events
   */
  TICKETS_BEFORE_YOURS = 'queuing.tickets.before-yours',
  TICKET_CALLED = 'queuing.tickets.called-to-desk',
  TICKET_CANCELLED = 'queuing.tickets.cancelled',

  /**
   * Global events
   */
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  CONNECT_ERROR = 'connect_error',
  SUBSCRIBE = 'subscribe',
}

type Store = {
  realtime: Nullable<RealtimeClient>
  setRealtime: (realtime: RealtimeClient) => void
}

const useStore = create<Store>(set => ({
  realtime: null,
  setRealtime: realtime => set(() => ({ realtime })),
}))

const useRealtime = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )

const useInitializeRealtime = (organizationURL: string, widgetId: string) => {
  const $bus = useBus()
  const { setRealtime, realtime } = useRealtime()

  const { setSession, customer } = useSession()
  const { setShow, setHide } = useVisibility()

  useLayoutEffect(() => {
    const rtm = getRealtime(organizationURL, widgetId)

    if (customer.id) rtm.setQuery('customerId', customer.id)

    const unconnected = rtm.subscribe<Session>(
      RealtimeEvents.CONNECTED,
      data => {
        setRealtime(rtm)
        setSession(data.payload)
        setShow()

        $bus.ready.dispatch()
      }
    )

    const unsubError = rtm.subscribe(RealtimeEvents.CONNECT_ERROR, setHide)

    return () => {
      unconnected()
      unsubError()
    }
  }, [])

  return {
    realtime,
  }
}

export { useInitializeRealtime, useRealtime }
