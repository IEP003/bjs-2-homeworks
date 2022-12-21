class AlarmClock {
    constructor (){
        this.alarmCollection = []
        this.intervalId = null;
    }

    addClock(time, callback){
        if (!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы') 
        }
        const findResult = this.alarmCollection.find((installed) => installed.time === time)
        if (findResult){
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall: callback(true)
        })
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }

    getCurrentFormattedTime(){
        let date = new Date()
        return (`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`)
    }

    start(){
        if(this.intervalId) return
        this.intervalId = setInterval(this.taskExec.bind(this), 1000);
    }

    taskExec() {
        this.alarmCollection.forEach((alarm) => {
            if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall){
                alarm.canCall = false;
                alarm.callback();
            }
        })
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((alarm) =>{
            alarm.canCall = true;
        } )
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}