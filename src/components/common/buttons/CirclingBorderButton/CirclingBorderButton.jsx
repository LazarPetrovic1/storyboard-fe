import { Link } from 'react-router-dom';
import { BtnCont } from '../../../../styled';

function CirclingBorderButton() {
  return (
    <section className='mt-5 pb-5'>
      <h1>Circling Border Button</h1>
      <BtnCont>
        <Link stylerole="linkbutton" to="/">
          Learn More
          <span stylerole="line-1"></span>
          <span stylerole="line-2"></span>
          <span stylerole="line-3"></span>
          <span stylerole="line-4"></span>
        </Link>
      </BtnCont>
    </section>
  )
}

export default CirclingBorderButton;