class AlarmClock {
    constructor (){
        this.alarmCollection = []
        this.intervalId = this.id = null;
        this.canCall = true;
    }

    addClock(time, callback){
        if (time === undefined || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы') 
        }
        const findResult = this.alarmCollection.find((installed) => installed.time === time)
        if (findResult){
            console.warn('Уже присутствует звонок на это же время')
        }
        return  this.alarmCollection.push({
            id: this.id,
            time: time,
            canCall: callback(true)
        })
    }
}