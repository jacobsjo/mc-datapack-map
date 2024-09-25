export namespace EventTracker {
    export function track(event: string ){ 
        if ((window as any).beam !== undefined) {
            (window as any).beam("/event/" + event)
        }
    }
}