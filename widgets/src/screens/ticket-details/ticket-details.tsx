import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Modal } from '../../components/modal'
import { Order } from '../../components/order'
import { ServiceParams } from '../../components/services'
import { Transaction } from '../../components/transaction'
import { Text, Title } from '../../components/typography'
import { useAnnounceTicket } from '../../graphql/hooks/use-announce-ticket-mutation'
import { useLeaveTicket } from '../../graphql/hooks/use-leave-ticket-mutation'
import { useGetTicketQuery } from '../../graphql/hooks/use-ticket-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { Ticket, useInternalState } from '../../hooks/use-internal-state'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

const MIN_TICKETS_IN_QUEUE = 8

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()
  const { params } = useSearchParams()
  const { setCurrentLocation } = useCurrentLocation()
  const { service, ticket, setService, setTicket, setAnswers } =
    useInternalState()
  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const { announceCurrentTicket, isLoading: isAnnouncing } = useAnnounceTicket()
  const [isShowing, setIsShowing] = useState(false)

  const { isLoading } = useGetTicketQuery({
    variables: { getTicketId: params['tly-ticket-id'] },
    onCompleted: async ({ getTicket }) =>
      await Promise.all([
        setTicket({
          id: getTicket.id,
          status: getTicket.status,
          displayCode: getTicket.displayCode,
          beforeYours: getTicket.beforeYours,
          calledToDesk: getTicket.calledToDesk,
          customerId: getTicket.customerId,
        }),
        setService({ ...getTicket.service } as ServiceParams),
        setCurrentLocation({ ...getTicket.location }),
      ]),
  })

  const handleModalLeave = () => setIsShowing(p => !p)

  const leaveTicket = async () => {
    if (ticket) {
      await leaveCurrentTicket(ticket.id)

      await Promise.all([setAnswers([]), setTicket(null)])

      navigate(SCREEN_NAMES.SERVICES)
    }
  }

  const announceTicket = async () => {
    if (ticket) {
      const ticketUpdated = await announceCurrentTicket(ticket.id)

      console.log(ticketUpdated)

      setTicket(ticketUpdated as Ticket)
    }
  }

  if (isLoading) return null

  if (ticket === null) return null

  return (
    <Fragment>
      <Modal
        title="You’re sure?"
        description="If you get out of line you will lose your turn, you can always take a ticket again in the same location or in others."
        buttons={[
          {
            children: 'I understand, leave',
            isPrimary: true,
            onClick: leaveTicket,
            isLoading: isLeaving,
          },
          {
            children: 'Cancel',
            isDefault: true,
            onClick: handleModalLeave,
            disabled: isLeaving,
          },
        ]}
        isShowing={isShowing}
      />

      <div className="tly-home">
        <HeaderScreen>
          <Transaction
            idTransaction={ticket?.displayCode}
            typeTransaction={service?.name}
          />

          <Order />
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title>{translate(`tickets.${ticket.status}.title` as any)}</Title>
            <Text hasGaps={false}>
              {translate(`tickets.${ticket.status}.description` as any)}
            </Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button
              isOutline
              isSecondary
              onClick={handleModalLeave}
              disabled={isAnnouncing}
            >
              {translate('tickets.leave.button_text')}
            </Button>

            {ticket.beforeYours <= MIN_TICKETS_IN_QUEUE && (
              <Button isLoading={isAnnouncing} onClick={announceTicket}>
                {translate('tickets.announce.button_text')}
              </Button>
            )}
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
