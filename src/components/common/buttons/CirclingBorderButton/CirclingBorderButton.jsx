import { Link } from 'react-router-dom';
import { BtnCont } from '../../../../styled';

function CirclingBorderButton({ children, width }) {
  return (
    <section className='mt-5 pb-5'>
      <BtnCont width={width ? `${width}px` : "auto"}>
        <Link stylerole="linkbutton" className='w-100 d-inline-block' to="/">
          { children }
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