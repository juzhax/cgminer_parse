# cgminer_parse
Parse value data from cgiminer

## Sample Data;
```
{
  STATUS: 'S',
  When: '1675008918',
  Code: '11',
  Msg: 'Summary',
  Description: 'cgminer 4.9.0 rwglr|SUMMARY',
  Elapsed: '2676',
  GHS5s: '0.00000',
  GHSav: '20.79',
  FoundBlocks: '0',
  Getworks: '267',
  Accepted: '8',
  Rejected: '3',
  HardwareErrors: '0',
  Utility: '0.18',
  Discarded: '56',
  Stale: '0',
  GetFailures: '2',
  LocalWork: '209',
  RemoteFailures: '0',
  NetworkBlocks: '24',
  TotalMH: '55644.0000',
  WorkUtility: '20572.61',
  DifficultyAccepted: '524288.00000000',
  DifficultyRejected: '393216.00000000',
  DifficultyStale: '0.00000000',
  BestShare: '2381976',
  DeviceHardware: '0.0000',
  DeviceRejected: '42.8571',
  PoolRejected: '42.8571',
  PoolStale: '0.0000',
  Lastgetwork: '1675006334|'
}
```

## Usage


- row 1 is datas[0]
- row 2 is datas[1]
- row 3 is datas[2]

To get row 2 data GHSav

```
let data = datas[0].GHSav;
```


