import { useEffect } from 'react'
import styled from 'styled-components'

import Award from './components/Award'
import Statistics from './components/Statistics'
import theme from './styles/theme'

export default function Main() {
  const statisticsData = [
    {
      id: 1,
      num: '700',
      unit: '만 명',
      text: '의 여행자',
    },
    {
      id: 2,
      num: '100',
      unit: '만 개',
      text: '의 여행 리뷰',
    },
    {
      id: 3,
      num: '470',
      unit: '만 개',
      text: '의 여행 일정',
    },
  ]

  const awardData = [
    {
      id: 1,
      name: '플레이스토어',
      img: '/images/play-store2x.png',
      upper: '2018 구글 플레이스토어',
      lower: '올해의 앱 최우수상 수상',
    },
    {
      id: 2,
      name: '앱스토어',
      img: '/images/badge-apple4x.png',
      upper: '2018 애플 앱스토어',
      lower: '오늘의 여행앱 선정',
    },
  ]

  const countUp = () => {
    const dataValues = document.querySelectorAll('.num')

    dataValues.forEach((dataValue) => {
      let startValue = 0
      const endValue = parseInt(dataValue.getAttribute('data-val'))
      const duration = 2
      const counter = setInterval(function () {
        startValue += 1
        dataValue.textContent = startValue
        if (startValue === endValue) {
          clearInterval(counter)
        }
      }, duration)
    })
  }

  useEffect(() => {
    countUp()
  }, [])

  return (
    <Bg>
      <Wrap>
        <AppWrap>
          <AppImg src="/images/triple2x.png" alt="triple-app" />
          <Date>2021년 12월 기준</Date>
        </AppWrap>
        <StatisticsWrap>
          {statisticsData.map((item) => (
            <Statistics key={item.id} item={item} />
          ))}
          <AwardWrap>
            {awardData.map((item) => (
              <Award key={item.id} item={item} />
            ))}
          </AwardWrap>
        </StatisticsWrap>
      </Wrap>
    </Bg>
  )
}

const Bg = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 552px;
  background: #fff;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 344px;
  width: 1040px;
`

const AppWrap = styled.div`
  position: relative;
  ${theme.flexCustom('initial', 'center', 'center')};
  ${theme.fadeInUp('0.5s')}
`

const AppImg = styled.img`
  width: 400px;
  object-fit: contain;
`

const Date = styled.p`
  position: absolute;
  bottom: 40px;
  color: #3a3a3ab3;
  font-size: 15px;
`

const StatisticsWrap = styled.div``

const AwardWrap = styled.div`
  display: flex;
`
