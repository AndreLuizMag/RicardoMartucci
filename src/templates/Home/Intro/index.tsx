import React from 'react'
import './styles.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Intro = () => {
	return (
		<section className='sec-intro ps-relative width-100 pt-16 bg-blue-dark'>
			<div className='container-lg ps-relative z-index-02'>
				<div className='row align-stretch gap-3xl'>
					<div className='col pb-16 ds-flex flow-col-nw justify-end align-start gap-lg '>
						<h1 className='title color-dark-primary'>
							Dr Ricardo Martucci
						</h1>
						<div className='card p-10 ds-flex flow-col-nw gap-md radius-lg bg-light-secondary'>
							<p className='font-size-lg'>
								Referência no tratamento de varizes com e
								transplantes de ponte de safena.
							</p>
							<div className='ds-flex gap-sm'>
								<Link
									href=''
									className='btn primary text-decoration-none p-inline-10 p-block-5 radius-xs'>
									Saber mais
								</Link>
								<Link
									href=''
									className='btn outlined text-decoration-none p-inline-10 p-block-5 radius-xs'>
									Enrar em contato
								</Link>
							</div>
						</div>
					</div>
					<div className='col'>
						<Image
							src='image/ricardo-martucci.png'
							width={475}
							height={524}
							alt='Imagem Ricardo Martucci'
						/>
					</div>
				</div>
			</div>
			{/* <Image
				src='image/line-one.svg'
				alt='Linha'
				width={1728}
				height={244}
				className='ps-absolute top-0 left-0'
			/> */}
		</section>
	)
}
