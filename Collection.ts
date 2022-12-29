import Iterable from './Iterable'

export default class Collection extends Iterable {

    first() {
        return this.item(this.items[0])
    }

    count() {
        return this.items.length
    }

    contains(param){

        if(typeof param == "function"){
            for (const item of this) {
                if(param(item)){
                    return true
                }
            }
            return false
        }
        
        for (const item of this.items) {
            if(item === param){
                return true
            }
        }
        return false
        
    }
}