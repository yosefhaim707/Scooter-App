enum Status {
    Available = 'available',
    InRepair = 'inRepair',
    Unavailable = 'unavailable'
}

interface Scooter {
    id?: string,
    model: string,
    batteryLevel: number,
    imageUrl: string,
    color: string,
    status: Status
}

async function CreateScooter(scooter: Scooter): Promise<void> {
    const url: string = 'https://66ea8b1955ad32cda47955dd.mockapi.io/scooters/scooters';
    try {
        const response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(scooter)
            }
        );
        if (!response.ok) {
            throw new Error("Fetch Failed!!!");
        }
        else {
            const newScooter = await response.json();
            console.log(newScooter);
            console.log('Fetch Succeed');
            return newScooter;
        }

    } catch (error) {
        console.log(error);
        
    }
}




async function GetScooters(): Promise<Scooter[]> {
    try {
        const url: string = 'https://66ea8b1955ad32cda47955dd.mockapi.io/scooters/scooters';
        const response = await fetch(url);
        const scooters:Scooter[] = await response.json();
        return scooters;
    } catch(error) {
        throw error;
    }
}
    

const sampleScooter: Scooter = {
    model: 'a20',
    batteryLevel: 56,
    imageUrl: 'https://razor.com/wp-content/uploads/2018/01/A_RD_Product.jpeg',
    color: 'red',
    status: Status.Available
}

let scooters: unknown = GetScooters().then(result => scooters = result).catch(error => console.error(error));

