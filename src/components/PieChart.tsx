
import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react';






const PieChart = ({totalExpense}:any) => {
    // const data: any = [
    //     // {
    //     //     "id": "same",
    //     //     "label": "hello",
    //     //     "value": 384,
    //     //     // "color": "red" // Replace with your desired color for "go"
    //     // },

    // ];

    let [data, setData] = useState<any>([])
    let [expense, setExpense] = useState<any>([])

    useEffect(() => {

        //////////////////// Taking data from localStorage ///////////////////
        const dataa: any[] = JSON.parse(localStorage.getItem('Transactions') as string) || [];

        //////////////////// Update or add items to the 'names' array ///////////////////
        let expensearry: any = [];
        dataa.forEach((item: any) => {
            let someobj = expensearry.find((obj: any) => item.detail.id === obj.detail.id);
            if (someobj) {
                someobj.value = parseInt(someobj.value) + parseInt(item.value);
                setExpense(expensearry)
            } else {
                if (item.type == "expense") {
                    expensearry.push(item);
                    setExpense(expensearry)
                }
            }
        });
    }, []);

    const myarray: any = []

  
    useEffect(() => {

        expense.map((obj: any) => {
          
            let pernentage = Math.floor((parseInt(obj.value)) / parseInt(totalExpense) * 100) 
            let id = obj.detail.name
            let label = id

            let myobj = {
                "id": id,
                "label": label,
                "value": pernentage
            }
            myarray.push(myobj)
            setData(myarray)
        })
    }, [expense])

    return <div className='relative h-[100%] w-full'>

        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={10}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
        

        />
    </div>

}


export default PieChart