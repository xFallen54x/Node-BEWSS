import bewss from "src/bewss/bewss"

class Start {
  private bewss: bewss
  private commandName: string

  constructor(bewss: bewss) {
    this.bewss = bewss
    this.commandName = 'start'
  }

  async onEnabled(): Promise<void> {
    this.bewss.getEventManager().on(this.commandName, () => {
      this.bewss.getServerManager().onEnabled()
    })
  }

  async onDisabled(): Promise<void> {
    //
  }

}

module.exports = Start
