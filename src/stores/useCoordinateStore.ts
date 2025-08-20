import { defineStore } from "pinia";
import { ref } from "vue";

export const useCoordinateStore = defineStore('coordinate', () => {
    const x = ref<string>("")
    const z = ref<string>("")
    const isValid = ref(false)
    
    function validateCoordinates() {
        const xNum = parseFloat(x.value)
        const zNum = parseFloat(z.value)
        
        isValid.value = !isNaN(xNum) && !isNaN(zNum) && 
                       isFinite(xNum) && isFinite(zNum) &&
                       Math.abs(xNum) <= 30000000 && Math.abs(zNum) <= 30000000
    }
    
    function getCoordinates(): [number, number] | null {
        if (!isValid.value) return null
        return [parseFloat(x.value), parseFloat(z.value)]
    }
    
    function setCoordinates(newX: number, newZ: number) {
        x.value = newX.toString()
        z.value = newZ.toString()
        validateCoordinates()
    }
    
    function clear() {
        x.value = ""
        z.value = ""
        isValid.value = false
    }
    
    return {
        x,
        z,
        isValid,
        validateCoordinates,
        getCoordinates,
        setCoordinates,
        clear
    }
})
