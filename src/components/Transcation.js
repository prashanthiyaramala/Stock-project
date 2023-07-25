import React from 'react';
import './Transcation.css';
import ImgAsset from '../public';
import ReactApexChart from 'react-apexcharts';




export default function Transcation() {
	 const totalValue = 200; 

  const chartOptions = {
    labels: ['Corporate Card', 'Debit Card', 'Credit Card', 'Cash'],
    series: [20 / totalValue, 55 / totalValue, 30 / totalValue, 20 / totalValue],
    options: {
      chart: {
        type: 'pie',
        width: 380,
      },
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 10,
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };

	
	return (
		<div className='Transcation_Transcation'>
			<div className='Ellipse71'/>
			<div className='Rectangle3012'/>
			<span className='Bitcoin'>Bitcoin</span>
			<span className='_25713'>$25,713</span>
			<span className='_1839'>18.39%</span>
			<div className='Rectangle45'/><div className='Rectangle46' style={{backgroundImage: `url(${ImgAsset.Transcation_Rectangle46}),linear-gradient(0deg, rgba(255,255,255,1.00), rgba(255,255,255,1.00))`}}/>
			<span className='JohnDack'>John Dack</span>
			<div className='IconsaxLinearnotification'>
				<img className='Vector' src = {ImgAsset.Transcation_Vector} />
				<img className='Vector_1' src = {ImgAsset.Transcation_Vector_1} />
				<img className='Vector_2' src = {ImgAsset.Transcation_Vector_2} />
			</div>
			<img className='Bitcoin_1' src = {ImgAsset.Transcation_Bitcoin_1} />
			<div className='Polygon2'/>
			<div className='Ellipse14'/>
			<div className='Rectangle3013'/>
			<div className='IconsaxLinearsearchnormal'>
				<img className='Vector_3' src = {ImgAsset.Transcation_Vector_3} />
			</div>
			<span className='SearchHere'>Search Here...</span>
			<div className='IconsaxLinearmicrophone2'>
				<img className='Vector_4' src = {ImgAsset.Transcation_Vector_4} />
				<img className='Vector_5' src = {ImgAsset.Transcation_Vector_5} />
			</div>
			<img className='image10' src = {ImgAsset.Transcation_image10} />
			<div className='Rectangle3157'/>
			<div className='Rectangle3168'/>
			<div className='Rectangle3169'/>
			<div className='Rectangle3170'/>
			<div className='Ellipse57'/>
			<div className='Ellipse58'/>
			<div className='Ellipse59'/>
			<div className='Ellipse60'/>
			<div className='IconsaxLinearwallet3'>
				<img className='Vector_6' src = {ImgAsset.Transcation_Vector_6} />
				<img className='Vector_7' src = {ImgAsset.Transcation_Vector_7} />
				<img className='Vector_8' src = {ImgAsset.Transcation_Vector_8} />
			</div>
			<span className='Balance'>Balance</span>
			<span className='Income'>Income</span>
			<span className='Spending'>Spending</span>
			<span className='NetProfit'>Net Profit</span>
			<span className='_345012'>$3450.12</span>
			<span className='_2130'>$21.30</span>
			<span className='_185612'>$1856.12</span>
			<span className='_19112'>$19.112</span>
			<div className='IconsaxLinearmore'>
				<img className='Vector_9' src = {ImgAsset.Transcation_Vector_9} />
			</div>
			<div className='IconsaxLinearmore_1'>
				<img className='Vector_10' src = {ImgAsset.Transcation_Vector_10} />
			</div>
			<div className='IconsaxLinearmore_2'>
			</div>
			<img className='Vector_11' src = {ImgAsset.Transcation_Vector_11} />
			<div className='IconsaxLinearmore_3'>
				<img className='Vector_12' src = {ImgAsset.Transcation_Vector_12} />
			</div>
			<img className='Profit' src = {ImgAsset.Transcation_Profit} />
			<div className='Rectangle3161'> <div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="pie"
        width={chartOptions.options.chart.width}
      />
    </div></div>
			<div className='Rectangle3175'/>
			<span className='ScheduledPayments'>Scheduled Payments</span>
			<img className='Spendingcut' src = {ImgAsset.Transcation_Spendingcut} />
			<img className='Profits' src = {ImgAsset.Transcation_Profits} />
			  
		
			<span className='Invoice'>Invoice</span>
			<span className='Date'>Date</span>
			<span className='Status'>Status</span>
			<span className='Amount'>Amount</span>
			
	
			
			<div className='Rectangle3162'/>
			<div className='Rectangle3164'/>
			<div className='Rectangle3163'/>
			<div className='Rectangle3165'/>
			<span className='CorporateCard_1'>Corporate Card</span>
			<span className='CreditCard_1'>Credit Card</span>
			<span className='Cash_1'>Cash</span>
			<span className='DebitCard_1'>Debit Card</span>
			<span className='_269000'>$2690.00</span>
			<span className='_532490'>$5324.90</span>
			<span className='_90000'>$900.00</span>
			<span className='_643560'>$6435.60</span>
			<div className='Rectangle3166'/>
			<span className='TotalAmount'>Total Amount</span>
			<div className='Rectangle3167'/>
			<span className='AllTime'>All Time</span>
			
			<img className='Line229' src = {ImgAsset.Transcation_Line229} />
			<span className='ActiveCustomer'>Active Customer</span>
			<span className='TransactionOverview'>Transaction Overview</span>
			<span className='Name'>Name</span>
			<span className='Purchase'>Purchase</span><div className='Ellipse75' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse75}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse76' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse76}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse77' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse77}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse78' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse77}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse79' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse77}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse80' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse77}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/><div className='Ellipse81' style={{backgroundImage: `url(${ImgAsset.Transcation_Ellipse77}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/>
			<span className='AmyRay'>Amy Ray</span>
			<span className='Amy34gmailcom'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_1'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_2'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_3'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_4'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_5'>Amy34@gmail.com</span>
			<span className='Amy34gmailcom_6'>Amy34@gmail.com</span>
			<span className='JackDone'>Jack Done</span>
			<span className='RachelHow'>Rachel How</span>
			<span className='RachelHow_1'>Rachel How</span>
			<span className='RachelHow_2'>Rachel How</span>
			<span className='RachelHow_3'>Rachel How</span>
			<span className='RachelHow_4'>Rachel How</span>
			<span className='Monthly'>Monthly</span>
			<span className='Monthly_1'>Monthly</span>
			<span className='Yearly'>Yearly</span>
			<span className='Yearly_1'>Yearly</span>
			<span className='Yearly_2'>Yearly</span>
			<span className='Yearly_3'>Yearly</span>
			<span className='Yearly_4'>Yearly</span>
			<div className='Rectangle3176'/>
			<div className='Rectangle3177'/>
			<div className='Rectangle3178'/>
			<span className='_3456'>#3456</span>
			<span className='Jan62022'>Jan 6, 2022</span>
			<span className='_58967'>$589.67</span>
			<span className='_58967_1'>$589.67</span>
			<span className='_58967_2'>$589.67</span>
			<span className='Jan62022_1'>Jan 6, 2022</span>
			<span className='Jan62022_2'>Jan 6, 2022</span>
			<span className='_3456_1'>#3456</span>
			<span className='_3456_2'>#3456</span>
			<div className='Rectangle3179'/>
			<div className='Rectangle3180'/>
			<div className='Rectangle3181'/>
			<span className='Paid'>Paid</span>
			<span className='Paid_1'>Paid</span>
			<span className='Paid_2'>Paid</span>
			<img className='Vector_13' src = {ImgAsset.Transcation_Vector_13} />
			<img className='Vector_14' src = {ImgAsset.Transcation_Vector_14} />
			<img className='Vector_15' src = {ImgAsset.Transcation_Vector_15} />
		</div>
	)
}
