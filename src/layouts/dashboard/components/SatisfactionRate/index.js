import React from 'react';
import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { IoMdPeople } from 'react-icons/io';  // Replacing IoHappy with IoMdPeople to reflect subscription
import colors from 'assets/theme/base/colors';
import CircularProgress from '@mui/material/CircularProgress';

const SubscriptionRate = () => {
  const { info } = colors;

  return (
    <Card sx={{ height: '340px' }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="4px">
          Subscription Rate
        </VuiTypography>
        <VuiTypography variant="button" color="text" fontWeight="regular" mb="20px">
          Across all plans
        </VuiTypography>
        <VuiBox sx={{ alignSelf: 'center', justifySelf: 'center', zIndex: '-1' }}>
          <VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={75} size={170} color="info" />
            <VuiBox
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <VuiBox
                sx={{
                  background: info.main,
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <IoMdPeople size="30px" color="#fff" />
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <VuiBox
          sx={({ breakpoints }) => ({
            width: '90%',
            padding: '18px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            height: '82px',
            mx: 'auto',
            borderRadius: '20px',
            background: 'linear-gradient(120deg, #1e88e5, #42a5f5)',
            transform: 'translateY(-90%)',
            zIndex: '1000'
          })}
        >
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            0%
          </VuiTypography>
          <VuiBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: '80px' }}
          >
            <VuiTypography color="white" variant="h3">
              75%
            </VuiTypography>
            <VuiTypography color="text" variant="caption" fontWeight="regular">
              Current Subscribers
            </VuiTypography>
          </VuiBox>
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            100%
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default SubscriptionRate;
