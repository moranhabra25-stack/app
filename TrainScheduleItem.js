import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TrainScheduleItem({ trainTime, route }) {
  const [crowdStatus, setCrowdStatus] = useState('לא דווח');

  const reportCrowd = (status) => {
    setCrowdStatus(status);
    
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{trainTime}</Text>
        <Text style={styles.route}>{route}</Text>
      </View>
      
      <View style={styles.crowdSection}>
        <Text style={styles.crowdText}>צפיפות: {crowdStatus}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => reportCrowd('🟢 פנוי')} style={styles.dotBtn}>
            <Text>🟢</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => reportCrowd('🟡 בינוני')} style={styles.dotBtn}>
            <Text>🟡</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => reportCrowd('🔴 עמוס')} style={styles.dotBtn}>
            <Text>🔴</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#f9f9f9', padding: 12, borderRadius: 8, marginVertical: 6, borderWidth: 1, borderColor: '#eee' },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  time: { fontSize: 16, fontWeight: 'bold' },
  route: { fontSize: 14, color: '#555' },
  crowdSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 8 },
  crowdText: { fontSize: 12, color: '#666' },
  actions: { flexDirection: 'row', gap: 8 }
});
