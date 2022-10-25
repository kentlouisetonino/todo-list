import Github from '../Icons/Github'

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom wrapper">
      <div className="col-md-4 d-flex align-items-center">
        <p className="mb-0">
          Developed by{' '}
          <span className="font-weight-bolder">Kent Louise Tonino</span>
        </p>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://github.com/kentlouisetonino"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
    </footer>
  )
}
