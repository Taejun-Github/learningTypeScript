abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getHistory(): string
    abstract test(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) {
        super(cameraMode, filter);
    }

    getHistory(): string {
        return 'test';
    }
    test(): void {
        console.log('test');
    }
}

const taejun2 = new Instagram('mode', 'filter', 3);


export {}
