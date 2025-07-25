export namespace EventTracker {
    const doTrack = Math.random() < 0.2

    export function track(event: string ){ 
        if ((window as any).beam !== undefined && doTrack) {
            (window as any).beam("/event/" + event)
        }
    }
}