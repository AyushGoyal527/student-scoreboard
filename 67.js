
<<<<<<< HEAD


        <aside style={{ background: 'var(--card-background)', color: 'var(--card-foreground)', padding: '1rem', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0 }}>Stats</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            <Stat label="XP" value={profile?.stats?.xp ?? session.user.xp ?? 0} />
            <Stat label="Problems Solved" value={profile?.stats?.uniqueSolvedQuestions ?? 0} />
            <Stat label="Problems Attempted" value={profile?.stats?.uniqueQuestionsAttempted ?? 0} />
            <Stat label="Total Attempts" value={profile?.stats?.totalAttempts ?? 0} />
          </div>

=======
          <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: -1 }}>{session.user.name}</h1>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, padding: '3px 10px', borderRadius: 20, color: '#00e5ff', border: '1px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.07)' }}>● Active</span>
      </div>
      <p style={{ margin: 0, fontFamily: "'Space Mono',monospace", fontSize: 11, color: '#5a6070', marginBottom: 14 }}>{session.user.email}</p>
>>>>>>> 51c2a22371c259128559c068cf1332049e26ae6b

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, padding: '5px 14px', background: 'rgba(255,184,0,0.1)', border: '1px solid rgba(255,184,0,0.25)', borderRadius: 20, color: '#ffb800' }}>⚡ {xp} XP</span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, padding: '5px 14px', background: 'rgba(0,255,148,0.07)', border: '1px solid rgba(0,255,148,0.2)', borderRadius: 20, color: '#00ff94' }}>✓ {solved} solved</span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, padding: '5px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, color: '#5a6070' }}>{successRate}% success</span>
      </div>
    </div>

    <button
      onClick={() => router.push('/')}
      style={S.backBtn}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#00e5ff'; e.currentTarget.style.color = '#00e5ff'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#5a6070'; }}
    >
      ← home
    </button>
  </div>

    <div style={{ height: 1, background: 'linear-gradient(90deg,rgba(0,229,255,0.3),rgba(0,229,255,0.05),transparent)', margin: '28px 0' }} />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, alignItems: 'start' }}>

      <div style={S.card}>
        <div style={S.cardHeader}>
          <span style={S.cardTitle}>Recent Activity</span>
          {profile?.recent?.length > 0 && (
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070' }}>{profile.recent.length} submissions</span>
          )}
        </div>

        {loading && (
          <div style={{ padding: '32px 0', textAlign: 'center' }}>
            <div style={{ width: 24, height: 24, border: '2px solid rgba(0,229,255,0.2)', borderTopColor: '#00e5ff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: '#5a6070', margin: 0 }}>Loading activity...</p>
          </div>
        )}

        {error && (
          <div style={{ padding: '20px 0', fontFamily: "'Space Mono',monospace", fontSize: 12, color: '#ff4566' }}>{error}</div>
        )}

        {!loading && !error && profile?.recent?.length === 0 && (
          <div style={{ padding: '40px 0', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{'{ }'}</div>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: '#5a6070', margin: 0 }}>No activity yet — start solving!</p>
          </div>
        )}

        <div style={{ padding: '0 24px' }}>
          {profile?.recent?.map((item, i) => {
            const accepted = item.status === 'accepted';
            return (
              <div key={item.id || i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '14px 0',
                borderBottom: i < profile.recent.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                gap: 12,
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#e8eaf0', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.questionTitle}
                  </div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070' }}>
                    <span style={{
                      color: item.difficulty === 'Easy' ? '#4ade80' : item.difficulty === 'Hard' ? '#fbbf24' : '#f87171',
                      marginRight: 8,
                    }}>{item.difficulty}</span>
                    {item.testsPassed}/{item.testsTotal} tests passed
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "'Space Mono',monospace", fontSize: 10, padding: '3px 10px', borderRadius: 20, marginBottom: 4, display: 'inline-block',
                    color: accepted ? '#00ff94' : '#ff4566',
                    background: accepted ? 'rgba(0,255,148,0.08)' : 'rgba(255,69,102,0.08)',
                    border: `1px solid ${accepted ? 'rgba(0,255,148,0.2)' : 'rgba(255,69,102,0.2)'}`,
                  }}>
                    {accepted ? 'accepted' : item.status}
                  </div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: '#ffb800' }}>+{item.xpEarned} XP</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>Stats</span>
          </div>
          <div style={{ padding: '4px 24px 16px' }}>
            {[
              { label: 'Total XP', val: xp, color: '#ffb800' },
              { label: 'Problems Solved', val: solved, color: '#00ff94' },
              { label: 'Problems Attempted', val: attempted, color: '#00e5ff' },
              { label: 'Total Submissions', val: totalAttempts, color: '#e8eaf0' },
              { label: 'Success Rate', val: `${successRate}%`, color: successRate >= 60 ? '#00ff94' : successRate >= 30 ? '#ffb800' : '#ff4566' },
            ].map(({ label, val, color }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070', textTransform: 'uppercase', letterSpacing: 1 }}>{label}</span>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, fontWeight: 700, color }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardHeader}>
            <span style={S.cardTitle}>XP Progress</span>
          </div>
          <div style={{ padding: '16px 24px' }}>
            {(() => {
              const level = Math.floor(xp / 100) + 1;
              const levelXp = xp % 100;
              const levelPct = levelXp;
              return (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070' }}>LVL {level}</span>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070' }}>{levelXp}/100 XP</span>
                  </div>
                  <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${levelPct}%`, background: 'linear-gradient(90deg,#00e5ff,#00ff94)', borderRadius: 3, transition: 'width 0.5s ease' }} />
                  </div>
                  <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070', marginTop: 8 }}>
                    {100 - levelXp} XP to level {level + 1}
                  </div>
                </>
              );
            })()}
          </div>
        </div>

     <div style={S.card}>
      <div style={S.cardHeader}>
            <span style={S.cardTitle}>Badges</span>
            {profile?.badges?.length > 0 && (
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070' }}>{profile.badges.length} earned</span>
            )}
          </div>
          <div style={{ padding: '8px 24px 20px' }}>
            {!profile?.badges?.length
              ? <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color: '#5a6070', margin: '12px 0 0' }}>Keep solving to earn badges!</p>
              : (
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                  {profile.badges.map(b => (
                    <div key={b.key} style={{
                      padding: '10px 12px', borderRadius: 10, textAlign: 'center', minWidth: 100,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      transition: 'all 0.2s',
                    }}>
                      <div style={{ fontSize: 22, marginBottom: 4 }}>{b.emoji}</div>
                      <div style={{ fontWeight: 600, fontSize: 12, color: '#e8eaf0' }}>{b.name}</div>
                      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: '#5a6070', marginTop: 2 }}>{b.desc}</div>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </div>

      </div>
    </div>
      </main >

    <style>{fonts + extra}</style>
    </div >
  );
}
