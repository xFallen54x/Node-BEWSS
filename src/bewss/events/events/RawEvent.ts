import bewss from "src/bewss/bewss"

class RawEvent {
  private bewss: bewss
  private eventName: string

  constructor(bewss: bewss) {
    this.bewss = bewss
    this.eventName = 'RawEvent'
  }

  async onEnabled(): Promise<void> {
    this.bewss.getEventManager().registerEvent('RawEvent')
    this.bewss.getServerManager().getServer()
      .on('message', (packet: string) => {
        const parsedPacket = JSON.parse(packet)
        this.bewss.getEventManager().emit('RawEvent', parsedPacket)
      })
  }

  async onDisabled(): Promise<void> {
    this.bewss.getEventManager().unregisterEvent('RawEvent')
  }

}

module.exports = RawEvent
