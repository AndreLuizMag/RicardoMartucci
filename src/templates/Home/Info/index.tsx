import React from 'react'
import './styles.scss'
import Link from 'next/link'

export const Info = () => {
	return (
		<section className='sec-info p-block-16' id='two'>
			<div className='container-lg'>
				<div className='card bg-rm-primary radius-3xl overflow-hidden'>
					<div className='row align-stretch'>
						<div className='col p-16 sm:p-10 ds-flex-start flow-col-nw gap-3xl'>
							<div className='ds-flex flow-col-nw gap-sm'>
								<h2 className='color-dark-primary'>
									Lorem ipsum
								</h2>
								<div className='color-dark-tertiary'>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua
									</p>
									<p>
										Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis
										aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu
										fugiat nulla pariatur.
									</p>
									<p>
										Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>
								</div>
							</div>
							<Link
								href='#'
								className='p-block-6 p-inline-10 line-height-none text-decoration-none radius-xs bg-rm-secondary color-dark-primary hover:bg-rm-tertiary duration-normal property-color ease-in-out'>
								Entrar em contato
							</Link>
						</div>
						<div className='col image radius-3xl lg:ds-none'></div>
					</div>
				</div>
			</div>
		</section>
	)
}
