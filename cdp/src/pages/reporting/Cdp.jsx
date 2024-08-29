import {React,useEffect,useDispatch} from 'react'
import { Row, Col } from 'antd';
import FormInput from '../../components/FormInput/FormInput';
import '../reporting/Cdp.css';
import getCdpData from  '../../redux/slices/cdpslice'

function Cdp() {
    const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(getCdpData());
   },[dispatch]);
  return (
    <div style={{ height: '400px',lineHeight:'10px'}}>
        <Row gutter={[16, 16]}>
        <Col span={6}>
        <h3 className="text-[#014d4ecd] font-bold">CDP Reporting Year</h3>
        </Col>
        <Col span={6}>
          <h4 className="text-[#717171] ">2022</h4>
        </Col>
        <Col span={6}>
          <h3 className="text-[#014d4ecd] font-bold">CDP Score</h3>
        </Col>
        <Col span={6}>
          <h4 className="text-[#717171]">B-(Management)</h4>
        </Col>
      </Row>
      
      <div>
        <h4 className="text-[#014d4ecd] leading-[4] font-bold">Emission Data[C6]</h4>
      </div>
      
        <Row gutter={[16, 16]}>
        <Col span={8}>
          <FormInput className="text-[#014d4ecd] "   label={'Scope 1  Location Based[C6]' } placeholder={'55200'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }} />
        </Col>
        <Col span={8}>
          <FormInput style={'w-[80%]'} label={'Scope 2 Location Based[C6.3]'} placeholder={'10,03.246.00'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }} />
        </Col>
        <Col span={8}>
          <FormInput style={'w-[80%]'} label={'Scope 2 Market Based[C6.3]'} placeholder={'2,780.00'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }} />
        </Col>
      </Row>

      <div>
        <h4 className="text-[#014d4ecd] font-bold leading-[3]">Annual Savings</h4>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <FormInput style={'w-[80%] '} label={'Initiative Category'} placeholder={'Energy Efficiency'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }} />
        </Col>
        <Col span={8}>
          <FormInput style={'w-[80%]'} label={'Annual CO2 Savings'} placeholder={'6100'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }}/>
        </Col>
        <Col span={8}>
          <FormInput style={'w-[80%]'} label={'Annaul CO2 Savings'} placeholder={'11-15Years'} labelStyle={{ color: '#014d4ecd', fontWeight: 'bold' }}/>
        </Col>
      </Row>


      <Row gutter={[16, 16]}>
        <Col span={6}>
          <h4 className="text-[#014d4ecd] font-bold mt-2">Comments</h4>
        </Col>
        <Col span={16}>
     <p className="cdp-subtitle leading-loose mt-1">
    Energy efficiency program targets natural gas and electricity use at data centers, retail stores, offices,
    and R&D facilities located around the world.
    </p>
    </Col>

       
      </Row>


      <Row gutter={[16, 16]}>
        <Col span={8}>
          <h4 className="text-[#014d4ecd] font-bold mt-4">Intensity % attributed for your company</h4>
        </Col>
        <Col span={8}>
          <h4 className="cdp-subtitle mt-4">1.0056</h4>
        </Col>
        </Row>
    </div>
  )
}

export default Cdp