import styled from 'styled-components';

export const DropButtonsWrapper = styled.div`
  --def: #19166a; 	
	--inv: #eee;
  display: flex;
	justify-content: center;
	flex-flow: row wrap;
  & [stylerole="button"] {
    position: relative;
    padding: 0.75rem 1rem;
    font-size: 1.4rem;
    color: var(--inv);
    transition: all 250ms cubic-bezier(0.77, 0, 0.175, 1);	
    cursor: pointer;
    user-select: none;
    &::before,
    &::after {
      content: '';
      position: absolute;	
      transition: inherit;
      z-index: -1;
    }
    &:hover {
      color: var(--def); transition-delay: .25s;
      &::before { transition-delay: 0s; }
      &::after { background: var(--inv); transition-delay: .175s; }
    }
  }
  & [animrole="from-top"] {
    &::before, &::after { left: 0; height: 0; width: 100%; }
    &::before {
      bottom: 0;	
      border: 1px solid var(--inv);
      border-top: 0;
      border-bottom: 0;
    }
    &::after { top: 0; height: 0; }
    &:hover {
      &::before, &::after { height: 100%; }
    }
  }
  & [animrole="from-left"] {
    &::before, &::after { top: 0; width: 0; height: 100%; }
    &::before {
      right: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;
    }
    &::after { left: 0; }
    &:hover {
      &::before, &::after { width: 100%; }
    }
  }
  & [animrole="from-right"] {
    &::before, &::after { top: 0; width: 0; height: 100%; }
    &::before {
      left: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;	
    }
    &::after { right: 0; }
    &:hover {
      &::before, &::after { width: 100%; }
    }
  }
  & [animrole="from-bottom"] {
    &::before, &::after { left: 0; height: 0; width: 100%; }
    &::before {
      top: 0;	
      border: 1px solid var(--inv);
      border-top: 0;
      border-bottom: 0;
    }
    &::after { bottom: 0; height: 0; }
    &:hover {
      &::before, &::after { height: 100%; }
    }
  }
  & [animrole="from-center"] {
    &::before {
      top: 0;
      left: 50%;
      height: 100%;
      width: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;
    }
    &::after {
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      background: var(--inv);
    }
    &:hover {
      &::before { left: 0; width: 100%; }
      &::after { top: 0; height: 100%; }
    }
  }
`;

export const DropButtonsListWrapper = styled.ul`
  --def: #19166a; 	
	--inv: #eee;
  display: flex;
	justify-content: center;
	flex-flow: row wrap;
  & [stylerole="button"] {
    position: relative;
    padding: 0.75rem 1rem;
    font-size: 1.4rem;
    color: var(--inv);
    transition: all 250ms cubic-bezier(0.77, 0, 0.175, 1);	
    cursor: pointer;
    user-select: none;
    &::before,
    &::after {
      content: '';
      position: absolute;	
      transition: inherit;
      z-index: -1;
    }
    &:hover {
      color: var(--def); transition-delay: .25s;
      &::before { transition-delay: 0s; }
      &::after { background: var(--inv); transition-delay: .175s; }
    }
  }
  & [animrole="from-top"] {
    &::before, &::after { left: 0; height: 0; width: 100%; }
    &::before {
      bottom: 0;	
      border: 1px solid var(--inv);
      border-top: 0;
      border-bottom: 0;
    }
    &::after { top: 0; height: 0; }
    &:hover {
      &::before, &::after { height: 100%; }
    }
  }
  & [animrole="from-left"] {
    &::before, &::after { top: 0; width: 0; height: 100%; }
    &::before {
      right: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;
    }
    &::after { left: 0; }
    &:hover {
      &::before, &::after { width: 100%; }
    }
  }
  & [animrole="from-right"] {
    &::before, &::after { top: 0; width: 0; height: 100%; }
    &::before {
      left: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;	
    }
    &::after { right: 0; }
    &:hover {
      &::before, &::after { width: 100%; }
    }
  }
  & [animrole="from-bottom"] {
    &::before, &::after { left: 0; height: 0; width: 100%; }
    &::before {
      top: 0;	
      border: 1px solid var(--inv);
      border-top: 0;
      border-bottom: 0;
    }
    &::after { bottom: 0; height: 0; }
    &:hover {
      &::before, &::after { height: 100%; }
    }
  }
  & [animrole="from-center"] {
    &::before {
      top: 0;
      left: 50%;
      height: 100%;
      width: 0;
      border: 1px solid var(--inv);
      border-left: 0;
      border-right: 0;
    }
    &::after {
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      background: var(--inv);
    }
    &:hover {
      &::before { left: 0; width: 100%; }
      &::after { top: 0; height: 100%; }
    }
  }
`;
